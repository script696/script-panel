export interface IResponse<IData> {
  data: IData;
  statusText: string;
  status: number;
}
