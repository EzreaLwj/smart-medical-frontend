import { queryHealthMonitorRecordUsingGet } from '@/services/backend/patientController';
import { useModel } from '@@/exports';
import { Card, Col, Row } from 'antd';
import ReactECharts from 'echarts-for-react';
import 'echarts/lib/component/grid';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Email',
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};

const Analysis: FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const [state, setState] = useState<boolean>(false);
  const [weightData, setWeightData] = useState<API.MonitorData>();
  const [oxygenData, setOxygenData] = useState<API.MonitorData>();
  const [pulseData, setPulseData] = useState<API.MonitorData>();
  const [temperature, setTemperatureData] = useState<API.MonitorData>();
  const [bmi, setBmi] = useState<number>(0);

  useEffect(() => {
    getMonitorData();
  }, []);

  const getMonitorData = async () => {
    const r = await queryHealthMonitorRecordUsingGet({
      userId: initialState?.currentUser?.userId,
    });
    console.log(r);
    setWeightData(r.data?.weightData);
    setOxygenData(r.data?.oxygenData);
    setPulseData(r.data?.pulseData);
    setTemperatureData(r.data?.temperature);
    setBmi(r.data?.bmi);
    setState(true);
  };

  return (
    <>
      {state ? (
        <div>
          <Card>BMI（身体健康指数）：{bmi}</Card>
          <Row gutter={[8, 18]}>
            <Col span={12}>
              <Card title={'体重'}>
                <ReactECharts option={weightData} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title={'血氧'}>
                <ReactECharts option={oxygenData} />
              </Card>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Card title={'体温'}>
                <ReactECharts option={temperature} />
              </Card>
            </Col>
            <Col span={12}>
              <Card title={'脉搏'}>
                <ReactECharts option={pulseData} />
              </Card>
            </Col>
          </Row>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Analysis;
