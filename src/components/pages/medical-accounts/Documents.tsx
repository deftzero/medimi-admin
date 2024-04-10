import { Divider, List, Typography } from "antd";
import Download from '../../../assets/icons/download.svg?react'
import FileDoc from '../../../assets/file-doc.svg?react'
import FilePdf from '../../../assets/file-pdf.svg?react'
import { byteToHumanSize } from "../../../utils";
import { IFile } from "../../../data/interfaces";

const { Title } = Typography;



export default function Documents({ data }: { data: IFile[] }) {
  return (
    <div>
      <Title level={5} className='my-2'>Documents</Title>
      <Divider className="my-3" />
      <div className="list">
        <List
          dataSource={data}
          itemLayout="horizontal"
          renderItem={(item) => (
            <List.Item
              actions={[<Download />]}
            >
              <List.Item.Meta
                avatar={item.type === 'pdf' ? <FilePdf /> : <FileDoc />}
                title={<span>{item.name}</span>}
                description={byteToHumanSize(item.size)}
              />
            </List.Item>
  )}
        />
      </div>
    </div>
  )
}
