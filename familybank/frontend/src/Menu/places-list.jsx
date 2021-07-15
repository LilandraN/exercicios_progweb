import React from 'react';
import { List, message, Avatar, Spin, Button } from 'antd';
import reqwest from 'reqwest';
import api from '../services/api';
import InfiniteScroll from 'react-infinite-scroller';

import { EnvironmentOutlined } from '@ant-design/icons';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class PlacesList extends React.Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };
  componentDidMount() {
    api.get(`places`, {}).then(response => {
      this.setState({
        data:response.data,
      })
      console.log(response);
    });
  }
  componentDidUpdate() {
    api.get(`places`, {}).then(response => {
      this.setState({
        data:response.data,
      })
      console.log(response);
    });
  }

  delete = (id) => {
    api.delete(`place/${id}`, {}).then(response => {
      console.log(response);
    });
    api.get(`places`, {}).then(response => {
      this.setState({
        data:response.data,
      })
      console.log(response);
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

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
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
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
                    <Avatar icon={<EnvironmentOutlined />}/>
                  }
                  title={item.nome}
                  description={item.endereco}
                />
                <Button type='text' onClick={() => this.delete(item.idLugares)}>Excluir</Button>
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

export default PlacesList;