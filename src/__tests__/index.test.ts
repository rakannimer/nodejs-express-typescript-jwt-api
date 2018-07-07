import { server } from "../index";
import axiosist from 'axiosist'
import jwt from 'jsonwebtoken'
describe("server", () => {
  test("exports", () => {
    expect(server).toBeDefined();
  });
});

describe('routes:public', () => {
  test('/', async () => {
    const {data} = await axiosist(server).get('/');
    expect(data).toEqual('Oh hai Mark !')
  })
})


describe('routes:auth', () => {
  test('/auth', async () => {
    const USERNAME = "OhHaissasdasd"
    const {data:serverResponse} = await axiosist(server).get(`/auth?username=${USERNAME}`);
    const {data, status} = serverResponse;
    expect(status).toEqual("OK");
    expect(Object.keys(data)).toEqual(["token"])
    expect(typeof data.token).toEqual('string')
    const decodedToken:any = jwt.decode(data.token) || {};
    expect(decodedToken.username).toBeDefined();
    expect(decodedToken.username).toEqual(USERNAME);
  })
})

describe('routes:protected', async () => {
  test('/', async () => {
    const USERNAME = "OhHaissasdasd"
    const {data:serverResponse} = await axiosist(server).get(`/auth?username=${USERNAME}`);
    const {data, status} = serverResponse;
    const jwtToken = data.token;
    // console.log(jwtToken)
    const protectedRouteResponse = await axiosist(server).get('/protected', {
      headers:{
        "Authorization" : `Bearer ${jwtToken}`
      }
    })
    expect(protectedRouteResponse.data).toEqual('Oh hai Mark !')
  })
})