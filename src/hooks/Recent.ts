import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import moment from 'moment';

import { IItem } from '@src/interfaces';

export enum RecentContentType {
  Post = 'POST',
  Look = 'LOOK',
  Item = 'ITEM',
}

export type RecentSelectItem = Pick<IItem, 'name' | 'imageUrl' | 'id'> & {
  brand: {
    nameKor: string;
  };
  addedAt: string;
};

export interface IRecents {
  recentPosts: number[];
  recentLooks: number[];
  recentItems: number[];
  recentSelectItems: RecentSelectItem[];
}

export const useRecents = (): IRecents => {
  const [recents, setRecents] = useState<IRecents>({
    recentPosts: [-1],
    recentLooks: [-1],
    recentItems: [-1],
    recentSelectItems: [],
  });

  useEffect(() => {
    const cookies = new Cookies();

    setRecents({
      recentPosts: cookies.get('recent_post') || [-1],
      recentLooks: cookies.get('recent_look') || [-1],
      recentItems: cookies.get('recent_item') || [-1],
      recentSelectItems: (
        cookies.get('recent_select_item') || []
      ).filter((selectItem) =>
        moment(selectItem.addedAt).add(2, 'hour').isAfter(moment())
      ),
    });
  }, []);

  return recents;
};

export const useRecentAdd = (
  recentContentType: RecentContentType,
  id: number
) => {
  useEffect(() => {
    if (!id) {
      return;
    }

    const cookies = new Cookies();
    const cookieName = `recent_${recentContentType.toLowerCase()}`;
    const recents = cookies.get(cookieName) || [];

    cookies.set(
      cookieName,
      [id].concat(recents.filter((recent) => recent && recent !== id)),
      { path: '/', expires: moment().add(1, 'day').toDate() }
    );
  }, []);
};

export const useRecentSelectItemAdd = (data: IItem) => {
  useEffect(() => {
    if (!data) {
      return;
    }

    const cookies = new Cookies();
    const cookieName = 'recent_select_item';
    const recentSelectItems = cookies.get(cookieName) || [];

    const { id, name, imageUrl } = data;
    const brand = { nameKor: data.brand.nameKor };

    cookies.set(
      cookieName,
      [{ id, name, imageUrl, brand, addedAt: moment().format() }].concat(
        recentSelectItems.filter(
          (recentSelectItem) => recentSelectItem?.id !== id
        )
      ),
      { path: '/', expires: moment().add(1, 'day').toDate() }
    );
  }, [data]);
};
