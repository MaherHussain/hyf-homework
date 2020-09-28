class Email {
  constructor(subject,body) {
    this.subject = subject;
    this.body = body
  }
}
class SpamDetector {

   

    isSpam(email){
       

    }
}

const emailFromOldFriend = new Email("hello","Hello friend when we will meet" );
console.log(emailFromOldFriend);
const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend));