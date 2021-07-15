import React, { useEffect, useState } from 'react';
import { Layout, Collapse, Typography, Card, Row, Col, Divider, Button} from 'antd';
import {
  HomeOutlined,
} from '@ant-design/icons';
import InfiniteListExample from './dependents-list';
import PlacesList from './places-list';
import ClientsList from './clients-list';
import ModalCadastroClientes from '../CadastroCliente/modal-cliente';
import ModalCadastroContas from '../CadastroConta/modal-conta';
import ModalCadastroDependentes from '../CadastroDependente/modal-dependente';
import ModalCadastroEstabelecimento from '../CadastroEstabelecimento/modal-estabelecimento';
import ModalCadastroTipo from '../CadastroTipo/modal-tipo';
import api from '../services/api';
import './menu.css';

const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;
const { Title } = Typography;

export default function SiderDemo({ email, token, setToken }) {
  const [name, setName] = useState();
  const [token1, setToken1] = useState();
  const [idUser, setId] = useState();
  const [limiteCredito, setLimiteCredito] = useState();

  useEffect(() => {
    api.get(`client/${email}`, {}).then(response => {
      setName(response.data.nome);
      console.log(response.data);
      setId(response.data.idCliente);
      setToken1(token);
    });
    api.get(`account/${idUser}`, {}).then(resp => {
      setLimiteCredito(resp.data.limiteCredito);
    });
  });
  const loggout = () => {
    window.location.reload();
  }
  //setToken(token1);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null}>
        <div className="logo"><HomeOutlined /> Home</div>
        {email === 'admin' ?
          <>
            <ModalCadastroEstabelecimento setToken={setToken} token={token1}/>
            <ModalCadastroTipo />
            <ModalCadastroClientes />
            <ModalCadastroContas />
          </>
          :
          <>
            <ModalCadastroDependentes />
          </>
        }
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Title level={2} style={{ color: 'grey', marginLeft: 24, marginTop: 10 }}>Family Bank</Title>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, marginTop: 15 }}>
            {/* <DrawerForm /> */}
            <Row>
              <Col span={20}>
                <Title level={2}>Bem vindo, {name}! </Title>
              </Col>
              <Col span={4}>
                <Button onClick={() => loggout()}>Loggout</Button>
              </Col>
            </Row>
            <Divider />
            {email !== 'admin' ?
              <>
                <Row>
                  <Col span={24}>
                    <h2> Codigo de Usuario: {idUser}.</h2>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Card title="Saldo" style={{ width: 500 }}>
                      <Title level={2} style={{ textAlign: 'right' }}>R$ 100,00</Title>
                    </Card>
                  </Col>
                  <Col span={12} style={{ paddingLeft: 122 }}>
                    <Card title="Limite de Crédito" style={{ width: 500 }}>
                      <Title level={2} style={{ textAlign: 'right' }}>R$ {parseInt(limiteCredito).toFixed(2)}</Title>
                    </Card>
                  </Col>
                </Row>
                <Collapse defaultActiveKey={['1']} style={{ marginTop: 6 }} ghost>
                  <Panel header="Dependentes" key="3">
                    <InfiniteListExample idUser={idUser} />
                  </Panel>
                </Collapse>
                <Collapse defaultActiveKey={['1']} style={{ marginTop: 6 }} ghost>
                  <Panel header="Lugares" key="3">
                    <PlacesList />
                  </Panel>
                </Collapse>
              </>
              :
              <>
                <Collapse defaultActiveKey={['1']} style={{ marginTop: 6 }} ghost>
                  <Panel header="Clientes do Sistema" key="3">
                    <ClientsList />
                  </Panel>
                </Collapse>
                <Collapse style={{ marginTop: 6 }} ghost>
                  <Panel header="Lugares" key="3">
                    <PlacesList />
                  </Panel>
                </Collapse>
              </>
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Alunos: Lilandra e Guilherme.</Footer>
      </Layout>
    </Layout >
  );
}
