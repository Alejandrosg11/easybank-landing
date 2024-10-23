import { Component } from '@angular/core';

@Component({
	selector: 'app-bullet',
	standalone: true,
	imports: [],
	templateUrl: './bullet.component.html',
	styleUrl: './bullet.component.scss'
})
export class BulletComponent {
	bullets = [
		{
			"img": "icon-online.svg",
			"title": "Online Banking",
			"body": "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
		},
		{
			"img": "icon-budgeting.svg",
			"title": "Simple Budgeting",
			"body": "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
		},
		{
			"img": "icon-onboarding.svg",
			"title": "Fast Onboarding",
			"body": "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
		},
		{
			"img": "icon-api.svg",
			"title": "Open API",
			"body": "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
		},
	]
}
