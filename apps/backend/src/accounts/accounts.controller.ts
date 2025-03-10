import { Controller, Body, Post } from '@nestjs/common';
import { CreateAccountRequest } from './create-account.request';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  createAccount(@Body() account: CreateAccountRequest) {
    this.accountsService.create(account);
  }
}
