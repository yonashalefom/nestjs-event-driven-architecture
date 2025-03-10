import { Injectable } from '@nestjs/common';
import { CreateAccountRequest } from './create-account.request';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GenerateSnapshotsEvent } from '../snapshots/generate-snapshots.event';

@Injectable()
export class AccountsService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  private readonly accounts: CreateAccountRequest[] = [];

  create(account: CreateAccountRequest) {
    this.accounts.push(account);
    this.eventEmitter.emit(
      'snapshots.generate',
      new GenerateSnapshotsEvent('123'),
    );
  }

  getAccounts() {
    return this.accounts;
  }
}
