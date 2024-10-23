import { Component } from '@angular/core';

@Component({
	selector: 'app-articles',
	standalone: true,
	imports: [],
	templateUrl: './articles.component.html',
	styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
	articles = [
		{
			"img": "string",
			"author": "By Claire Robinson",
			"title": "Receive money in any currency with no fees",
			"body": "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
		},
		{
			"img": "string",
			"author": "By Wilson Hutton",
			"title": "Treat yourself without worrying about money",
			"body": "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
		},
		{
			"img": "string",
			"author": "By Wilson Hutton",
			"title": "Take your Easybank card wherever you go",
			"body": "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
		},
		{
			"img": "string",
			"author": "By Claire Robinson",
			"title": "Our invite-only Beta accounts are now live!",
			"body": "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
		},
	]
}
