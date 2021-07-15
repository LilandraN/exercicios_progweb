import React from 'react';
import { List, message, Avatar, Spin , Button} from 'antd';
import api from '../services/api';
import InfiniteScroll from 'react-infinite-scroller';

class InfiniteListExample extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };
  componentDidMount() {
    let idConta = this.props.idUser
    api.get(`dependent/user/${idConta}`, {}).then(response => {
      this.setState({
        data:response.data,
      })
      console.log(response);
    });
  }
  componentDidUpdate() {
    let idConta = this.props.idUser
    api.get(`dependent/user/${idConta}`, {}).then(response => {
      this.setState({
        data:response.data,
      })
      console.log(response);
    });
  }
  reload = () => {
    let idConta = this.props.idUser
    api.get(`dependent/user/${idConta}`, {}).then(response => {
      this.setState({
        data:response.data,
      })
      console.log(response);
    });
  }
  delete = (id) => {
    api.delete(`dependent/${id}`, {}).then(response => {
      console.log(response);
      this.reload()
    });
  }

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
  };

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.nome}
                  description={item.email}
                />
                <Button type='text' onClick={() => this.delete(item.cpf)}>Excluir</Button>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteListExample;