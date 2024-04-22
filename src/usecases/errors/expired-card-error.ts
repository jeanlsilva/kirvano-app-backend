export class ExpiredCardError extends Error {
    public httpStatus = 500;
    constructor() {
      super('Expired Card');
      this.name = 'ExpiredCardError';
    }
  }
  