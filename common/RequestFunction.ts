export class RequestFunction {
  constructor(
    public readonly serviceClient: any,
    public readonly cmd: any,
    public readonly data: any,
  ) {}

  async request() {
    console.log(this.cmd, this.data);

    return await new Promise((resolve, reject) => {
      this.serviceClient.send({ cmd: this.cmd }, this.data).subscribe({
        next: (data: any) => resolve(data),
        error: (err: any) => reject(err),
        complete: () => resolve(null),
      });
    });
  }
}
