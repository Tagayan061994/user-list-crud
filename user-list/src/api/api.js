/* @flow */
import { HEADERS, METHODS } from "./conf";

export class ApiError extends Error {
  status: number;
  constructor({ status, message }: Object) {
    super(message);
    this.status = status;
  }
}

const firstStageSuccess = (res: Object) => {
  if (res.status >= 400 || res.status === "error") {
    const err = new ApiError({
      status: res.status,
      message: `${res.message}`,
    });
    throw err;
  }

  return res;
};
const __fetch = (method: string) => (
  path: string,
  body?: Object,
  extraHeaders?: Object = {}
) =>
  fetch(path, {
    method,
    headers: { ...HEADERS[method], ...extraHeaders },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
    .then((res) => {
      if (res.status === 204) {
        return true;
      }
      return res;
    })
    .then((res) => {
      const totalCount = res.headers.get("x-total-count");
      return res.json().then((response) => ({ ...response, totalCount }));
    })
    .then(firstStageSuccess);

export default METHODS.reduce(
  (acc, meth) => ({ ...acc, [meth]: __fetch(meth) }),
  {}
);
