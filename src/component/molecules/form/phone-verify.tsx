import React, { useState } from 'react';
import styled from 'styled-components';

import { Button, Row, TextInput } from '@src/component/atoms';
import { AuthService } from '@src/services';

export type PhoneVerifyFormProps = {
  phoneNum: string;
  isPhoneNumValid: boolean;
  onPhoneNumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isCodeValid: boolean;
  changeIsValid: (name: string, valid: boolean) => void;
};

function PhoneVerifyForm({
  phoneNum,
  isPhoneNumValid,
  onPhoneNumChange,
  isCodeValid,
  changeIsValid,
}: PhoneVerifyFormProps) {
  const [code, setCode] = useState('');
  const [isCodeSent, setCodeSent] = useState(false);

  const sendCode = async () => {
    if (phoneNum.length !== 13) {
      alert('휴대폰 번호 11자리를 정확하게 입력해주세요.');
      return;
    }

    try {
      await AuthService.phoneVerify(phoneNum);
      changeIsValid('phoneNum', true);
      setCodeSent(true);
      alert(
        `입력하신 번호로 인증번호가 ${
          isCodeSent ? '재' : ''
        }발송되었습니다.${'\n'}인증번호 6자리를 입력해주세요.`
      );
    } catch (err) {
      if (err.response.data?.errorCode === 'ALREADY_PHONE_VERIFIED') {
        changeIsValid('phoneNum', false);
        alert('이미 인증된 번호입니다.');
        return;
      }
      alert(err.response.data?.errorMessage);
    }
  };

  const verifyCode = async (code: string) => {
    try {
      await AuthService.phoneVerifyComplete({
        phoneNum,
        code,
      });
      changeIsValid('code', true);
    } catch (err) {
      if (err.response.data?.errorCode === 'VERIFICATION_FAILED') {
        alert('인증번호가 일치하지 않습니다.');
        changeIsValid('code', false);
        return;
      }
      alert(err.response.data?.errorMessage);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCode(value);
    if (value.length === 6) verifyCode(value);
  };

  return (
    <>
      <StyledRow>
        <TextInput
          name="phoneNum"
          value={phoneNum}
          placeholder="휴대폰 번호"
          error={{
            state: isPhoneNumValid === false,
            text: '이미 인증된 휴대폰 번호입니다.',
          }}
          disabled={isCodeValid === true}
          onChange={onPhoneNumChange}
        />
        <Button
          size="small"
          type={isCodeSent ? 'secondary' : 'primary'}
          title={isCodeSent ? '재발송' : '인증번호'}
          onClick={sendCode}
          disabled={phoneNum.length !== 13 || isCodeValid}
          style={{ marginTop: '0.6rem', marginLeft: '1.2rem' }}
        />
      </StyledRow>
      <TextInput
        name="code"
        value={code}
        placeholder="인증번호 6자리"
        onChange={handleCodeChange}
        success={{
          state: isCodeValid,
          text: '인증이 완료되었습니다.',
        }}
        error={{
          state: isCodeValid === false,
          text: '인증번호가 일치하지 않습니다.',
        }}
        disabled={isCodeValid}
        style={{ marginBottom: '1.2rem' }}
      />
    </>
  );
}

export default React.memo(PhoneVerifyForm);

const StyledRow = styled(Row)`
  align-items: flex-start;
  margin-bottom: 1.2rem;
`;
