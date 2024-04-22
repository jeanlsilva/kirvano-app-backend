export class InvalidCardError extends Error {
    public httpStatus = 500;
    constructor() {
      super('Invalid Card');
      this.name = 'InvalidCardError';
    }
  }
  