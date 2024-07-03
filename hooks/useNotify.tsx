import { message } from 'antd';
import { NoticeType } from 'antd/es/message/interface';
import React from 'react';

const useNotify = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const notify = (content:string, type?:NoticeType, duration:number = 5) => {
        messageApi.open({
            type,
            content,
            duration
          });
    }

    return (
        {
            notify,
            contextHolder
        }
    );
};

export default useNotify;