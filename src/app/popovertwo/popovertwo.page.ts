import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-popovertwo',
  templateUrl: './popovertwo.page.html',
  styleUrls: ['./popovertwo.page.scss'],
})
export class PopovertwoPage implements OnInit {
 

  constructor(
    public alertController: AlertController,
    private router: Router
  ) { }

  applications = [
    {
      "id": 1,
      "title": "Lay ups",
      "description": "A lay-up is just what it sounds like: a shot where we lay the ball up on the backboard or over the rim and into the basket. It can be done forwards, backwards, or sideways. It is a lay-up just the same.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 2,
      "title": "Shooting",
      "description": "For youth and high school players or players looking to fix their shooting form, these progressions can be used in a shooting workout.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 3,
      "title": "Foul Shooting",
      "description": "It is almost impossible to overemphasize the importance of free throws, both to teams and to players. If you have a player who can make just 4 baskets per game and add 4 free throws to his total, you have a double-figure scorer.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 4,
      "title": "Passing",
      "description": "Basketball is a team game. By definition, that means all players are involved with the process of playing the game and should function as one. One of the primary skills created to accomplish this is passing. Yet, passing remains one of the most under-taught, under-emphasized, and under drilled skill in the game!!",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 5,
      "title": "Dribbling & Handling",
      "description": "Most coaches use dribbling and ball handling interchangeably. Though they are linked, the 2 skills are definitely separate.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 6,
      "title": "Jump Stops",
      "description": "You might find this hard to believe, but if done properly, the Jump Stop Drill can make a huge difference in your players performance, both young and old.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 7,
      "title": "Triple Threat",
      "description": "Individual offense is often called one-on-one basketball moves. I prefer to call it individual offense due to the fact that basketball is a team game. In teaching players individual basketball moves, often the wrong message can be sent.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 8,
      "title": "Jab Steps",
      "description": "Individual offense is often called one-on-one basketball moves. I prefer to call it individual offense due to the fact that basketball is a team game. In teaching players individual basketball moves, often the wrong message can be sent.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 9,
      "title": "Screening",
      "description": "For example, when an offensive player sets a good screen (pick) the offensive player receiving the screen will have a good opportunity to score and pass to someone who is open.",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 10,
      "title": "Defense",
      "description": "If you don't have a good stance, you won't have a good defensive slide, and you'll constantly be out of position and off-balance. This will enable the offense to score on you at will. EVERYTHING begins with a good defensive stance!",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 11,
      "title": "Rebounding",
      "description": "Few statistics influence the outcome of the game as do rebounding stats. Few statistics are indicators of as many things as are rebounding stats. Few actions affect more parts of the game as rebounding",
      "urlimage": '../assets/icon/favicon.png'
    },
    {
      "id": 12,
      "title": "Post Moves",
      "description": "Few positions on the basketball court are as pivotal to a basketball team as the post player. A player at any position can have impact, but no other position can change the game like a post player. Many of the rules we play by today are the result of post play. The foul lane was widened from 6 feet to 12 feet due to the play of Bill Russell. The rule that the ball cannot pass over the backboard came about as a reaction to Wilt Chamberlain. The no dunk rule (now in effect only in warm-ups) was a result of the dominating presence of Lew Alcindor (no Kareem Abdul-Jabbar).",
      "urlimage": '../assets/icon/favicon.png'
    }
  ]

  // viewDetails(application) {
  //   console.log(application)
  // }
  async presentAlertConfirm(application) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Press Confirm!',
      message: 'To redirect',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'my-alert-class',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.router.navigate(['/funda-details', {
                'id': application.id,
                'title': application.title,
                'description': application.description
            }
          ])
            console.log('Confirm Okay');
          }
        }
      ]
    });
    console.log(application)
    await alert.present();
  }

  ngOnInit() {
  }

}
