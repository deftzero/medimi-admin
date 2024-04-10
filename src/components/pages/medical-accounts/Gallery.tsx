import { Divider, Typography } from "antd";
import { Image } from 'antd';
import { IFile } from "../../../data/interfaces";


const { Title } = Typography;



export default function Gallery({ data }: { data: IFile[] }) {
  return (
    <div>
      <Title level={5} className='my-2'>Gallery</Title>
      <Divider />
      <div className="list flex flex-wrap gap-5">
        {data.map(item => (
          <Image
            width={100}
            src={item.url}
          />
        ))}
      </div>
    </div>
  )
}
