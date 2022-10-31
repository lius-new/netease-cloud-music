import api from '../index'

export const loginByEmail = async (email: string, passwd: string) => {
  const resp = await api.get(`/login?email=${email}&password=${passwd}`)
  return resp.data
}

export const getLoginQrKey = async () => {
  const resp = await api.get(`/login/qr/key?timerstamp=${Date.now()}`)
  return resp.data
}

export const getLoginQrCreate = async (key: string) => {
  const resp = await api.get(
    `/login/qr/create?key=${key}&qrimg=trueerstamp=${Date.now()}`
  )
  return resp.data
}
export async function checkStatus(key: string) {
  const res = await api(`/login/qr/check?key=${key}&timerstamp=${Date.now()}`)
  return res.data
}

export async function getLoginStatus(cookie = '') {
  const res = await api({
    url: `/login/status?timerstamp=${Date.now()}`,
    method: 'post',
    data: {
      cookie,
    },
  })
  return res.data
  // document.querySelector('#info').innerText = JSON.stringify(res.data, null, 2)
}
