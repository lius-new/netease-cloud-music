import { Component } from 'vue'
import pages from '../views/pages'

export interface IRoute {
  path: string
  component: Component
  text: string
}

export const routes: IRoute[] = [
  {
    path: '/',
    component: pages.HomePages,
    text: '发现音乐',
  },
  {
    path: '/private-sm',
    component: pages.PrivateSM,
    text: '私人SM',
  },
  {
    path: '/mv',
    component: pages.Mv,
    text: 'MV',
  },
  {
    path: '/friend',
    component: pages.Friend,
    text: '朋友',
  },
  {
    path: '/mysonger',
    component: pages.MySonger,
    text: '我的歌手',
  },
  {
    path: '/lover',
    component: pages.Lover,
    text: '我喜欢的音乐',
  },
  {
    path: '/songlist-detail',
    component: pages.SongListDetail,
    text: '歌单详情',
  },
  {
    path: '/private-send',
    component: pages.PrivateSend,
    text: '独家放松',
  },
]
