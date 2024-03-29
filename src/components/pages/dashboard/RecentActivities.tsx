import { Divider, Timeline, Typography } from "antd";
import ActivityDot from '../../../assets/icons/activity-dot.svg?react'

const { Title } = Typography;

export default function RecentActivities() {
  return (
    <>
      <Title level={4} className="my-3">Recent Activities</Title>
      <Divider />
      <Timeline
        items={[
          {
            dot: <ActivityDot />,
            children: (
              <>
                <p className="text-md font-semibold my-2">Product Updated</p>
                <p className="text-xs my-1">Product 302881 has been updated</p>
                <span className="text-xs text-slate-400">1 day ago</span>
              </>
            ),
          },
          {
            dot: <ActivityDot />,
            children: (
              <>
                <p className="text-md font-semibold my-2">Product Updated</p>
                <p className="text-xs my-1">Product 302881 has been updated</p>
                <span className="text-xs text-slate-400">1 day ago</span>
              </>
            ),
          },
          {
            dot: <ActivityDot />,
            children: (
              <>
                <p className="text-md font-semibold my-2">Product Updated</p>
                <p className="text-xs my-1">Product 302881 has been updated</p>
                <span className="text-xs text-slate-400">1 day ago</span>
              </>
            ),
          },
        ]}
      />
    </>
  )
}

