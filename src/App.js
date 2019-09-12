import React from 'react';
import RollPacker from './components/roll-packer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className='header-main'>
          <div className='header-menu'>
            <a href="javascript:void(0)" className='logo' style={{textAlign:'right',width:'125px'}}>
              <img src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png' style={{height:'20px'}}/>
            </a>
            <i className='i-one'>|</i>
            <i className='i-two'>社招官网</i>
            <ul>
              <li><a href="javascript:void(0)" style={{ color:'#F37327', opacity:'1', fontFamily:'PingFangSC-Regular' }}>首&nbsp;&nbsp;页</a></li>
              <li><a href="javascript:void(0)">社会招聘</a></li>
              <li><a href="javascript:void(0)">校园招聘</a></li>
              <li><a href="javascript:void(0)">了解阿里</a></li>
              <li><a href="javascript:void(0)">个人中心</a></li>
              <div className='login' style={{opacity:'0.8'}}>欢迎来到阿里巴巴集团招聘！<a href="javascript:void(0)">登陆</a> | <a href="javascript:void(0)">注册</a></div>
            </ul>
          </div>
        </div>
      </div>
      <div className='App-main' style={{ position:'relative',height:'478px' }}>
        <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" style={{ verticalAlign:'middle', width:'100%',height:'100%'}} />
        <div style={{ position: 'absolute',top:0,left:0,width: '100%',height:'100%' ,background:'rgba(31,56,88,0.40)'}}></div>
        <div className='App-box' style={{height:'100%'}}>
          <form>
            <div className='float-mid' style={{ top:'50%',marginLeft:'-245px',marginTop:'-145px'}}>
              <p style={{fontSize:'54px',color:'#fff',lineHeight:'56px',fontFamily:'Rufina-Bold'}}>If not now, when?</p>
              <p style={{fontSize:'54px',color:'#fff',lineHeight:'56px',fontFamily:'Rufina-Bold'}}>If not me, who?</p>
              <p style={{fontSize:'34px',color:'#fff',lineHeight:'48px',marginBottom:'38px'}}>此时此刻，非我莫属！</p>
              <div className='ss-box'>
                <div style={{width:'100%',height:'100%',background:'#fff',position:'absolute',opacity: '0.1',filter:'alpha(opacity=10)'}}></div>
                <input className='search-text' type='text' maxLength="30" placeholder="请输入职位关键词" style={{width:'368px',height:'40px',paddingTop:'6px',marginTop:'6px',marginLeft:'10px',boxSizing:'border-box',borderRadius:'3px',color:'rgba(31,56,88,0.30)'}}></input>
                <input className='search-btn' type='submit' value='搜索'></input>
              </div>
              <div class="hot-text" style={{textAlign:'center'}}>
                <span style={{color:'rgba(255,255,255,0.80)'}}>热门搜索：</span>&nbsp;&nbsp;
                  <a class="search-key" href="javascript:void()" >JAVA</a>
                  <a class="search-key" href="javascript:void()" >IOS</a>
                  <a class="search-key" href="javascript:void()" >数据</a>
                  <a class="search-key" href="javascript:void()" >安全</a>
                  <a class="search-key" href="javascript:void()" >搜索</a>
                  <a class="search-key" href="javascript:void()" >算法</a>
                  <a class="search-key" href="javascript:void()" >运营</a>
                  <a class="search-key" href="javascript:void()" >视觉</a>
                  <a class="search-key" href="javascript:void()" >交互</a>
                  <a class="search-key" href="javascript:void()" >前端</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='newPosition'>
        <div className='newPosition-content'>
          <div className='newPosition-list' style={{width:'850px',height:'300px'}}>
            <div className='more-positon'>最新职位<a>更多</a></div>
            <RollPacker>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
              <RollPacker.Item className="roll-packer-item-content">
                <a className="roll-packer-item-a">口碑-数据产品专家-杭州</a>
                <span className="roll-packer-item-text">杭州</span>
                <span className="roll-packer-item-text">1 小时前</span>
              </RollPacker.Item>
            </RollPacker>
          </div>
          <div className='newPosition-right'>
            <a className='img1'>
              <img style={{width:'179px',verticalAlign:'middle'}} src='https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png'></img>
            </a>
            <a className='img2'>
              <img style={{width:'260px',verticalAlign:'middle'}} src='https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg'></img>
            </a>
          </div>
        </div>
      </div>
      <div className='App-footer'>
        <div className='footer-content'>
		      阿里巴巴集团 Copyright ©1999-2019 版权所有
        </div>
      </div>
    </div>
  );
}

export default App;
