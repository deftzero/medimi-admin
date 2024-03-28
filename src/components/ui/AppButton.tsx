import { Button } from "antd";

export default function AppButton(props: any) {
  return (
    <Button className='flex flex-row items-center p-4' style={{ boxShadow: 'unset' }} {...props} >{props.children}</Button>
  )
}

