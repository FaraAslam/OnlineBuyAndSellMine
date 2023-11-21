import { Injectable } from '@angular/core';
import { RepositoryService } from './repository/repository.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private repositoryService: RepositoryService, private route:Router) {}
  //api/Message/get-messages-between-two-users/{userToId}
  GetMessagesByUserId(userToId: string) {

    return this.repositoryService
      .get('Message/get-messages-between-two-users/' + userToId, true)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  //get-connected-users-with-last-message

  GetConnectedUsersWithLastMessage() {
    return this.repositoryService
      .get('Message/get-connected-users-with-last-message', true)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  // Send Message
  CreateMessage(userToId: string, messageText?: any) {
    return this.repositoryService
      .postWithFile('Message/message/' + userToId, messageText)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
