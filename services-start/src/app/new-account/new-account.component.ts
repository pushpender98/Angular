import { LoggingService } from './../logging.service';
import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private accountService: AccountService
    ){
      this.accountService.statusUpdated.subscribe(
        (status: String) => alert(status)
      );

    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    
    // this.loggingService.logStatusChange(accountStatus);
   // console.log('A server status changed, new status: ' + accountStatus);
  }
}
