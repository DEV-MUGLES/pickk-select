import React, { useState } from 'react';

import SWRPageList from '../list/page';
import SWRScrollList from '../list/scroll';
import { Tab } from '@src/component/molecules';
import { Space, Col } from '@src/component/atoms';

export type NavigateProps = {
  items: string[];
  current: number;
  onChange: (index: number) => void;
  requestConfigs: any[];
  ListItems: React.FunctionComponent<any>[];
  filters?: any[];
  initialDatas?: any[];
  Skeletons?: React.FunctionComponent<{ style?: React.CSSProperties }>[];
  NoResults?: React.FunctionComponent[];
  listFilters?: Array<(data: any) => boolean>;
  skips?: boolean[];
  scroll?: boolean;
  style?: React.CSSProperties;
  listStyle?: React.CSSProperties;
  withCount?: boolean;
  listItemProps?: any[];
};

export default function Navigate({
  items,
  current,
  onChange,
  requestConfigs,
  ListItems,
  filters,
  initialDatas,
  Skeletons,
  NoResults,
  listFilters,
  skips,
  scroll = true,
  style,
  listStyle,
  withCount = false,
  listItemProps,
}: NavigateProps) {
  const [loading, setLoading] = useState(false);

  const handleCurrentChange = (index) => {
    if (index === current) {
      return;
    }
    setLoading(true);
    onChange(index);
  };

  return (
    <Col
      style={{ ...{ alignItems: 'center', height: 'fit-content' }, ...style }}
    >
      <Tab
        items={items.map((item) => ({ title: item }))}
        value={current}
        onChange={handleCurrentChange}
        requestConfigs={requestConfigs}
        filters={filters}
        withCount={withCount}
      />
      <Space size={8} />
      {skips && skips[current] ? (
        <></>
      ) : (
        <>
          {!scroll && (
            <SWRPageList
              requestConfig={requestConfigs[current]}
              ListItem={ListItems[current]}
              filter={filters ? filters[current] : null}
              initialData={initialDatas ? initialDatas[current] : null}
              Skeleton={Skeletons ? Skeletons[current] : null}
              NoResult={NoResults ? NoResults[current] : null}
              listFilter={listFilters ? listFilters[current] : null}
              listItemProp={listItemProps ? listItemProps[current] : null}
              {...{ loading, setLoading }}
              style={style}
            />
          )}
          {scroll && (
            <SWRScrollList
              requestConfig={requestConfigs[current]}
              ListItem={ListItems[current]}
              filter={filters ? filters[current] : null}
              initialData={initialDatas ? initialDatas[current] : null}
              Skeleton={Skeletons ? Skeletons[current] : null}
              NoResult={NoResults ? NoResults[current] : null}
              listFilter={listFilters ? listFilters[current] : null}
              deps={[
                requestConfigs[current],
                ListItems[current],
                filters && filters[current],
              ]}
              listItemProp={listItemProps ? listItemProps[current] : null}
              {...{ loading, setLoading }}
              style={{ ...style, ...listStyle }}
            />
          )}
        </>
      )}
    </Col>
  );
}
