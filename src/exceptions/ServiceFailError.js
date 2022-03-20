import EE from 'extendable-error-class';

export default class ServiceFailError extends EE {
  constructor(m) {
    super(m);

    this.status = 424;
  }
}
