const GithubCards = document.querySelector('.github-cards');
let parser = new DOMParser();

fetch('https://api.github.com/users/AraH94/repos')
	.then(response => response.json())
	.then(data => { // code in here to show your repositories
		data.forEach(github => {

			console.log(github)
			let github_cards = parser.parseFromString
				(` <a href="${github.html_url}" class="github-card" data-github="@username">
            <h3>"${github.name}</h3>
            <p>"${github.description ? github.description : ''
					}"</p>
            <span class="github-card__meta">
                <span class="github-card__language-icon" style="color: #7A0410;">●</span> Javascript
            </span>
            <span class="github-card__meta">
                <i class="fa fa-star" aria-hidden="true"></i>
                <span data-stars>
                    <i class="fa fa-spinner" aria-hidden="true"></i>
                </span>
            </span>
            <span class="github-card__meta">
                <i class="fa fa-code-fork" aria-hidden="true"></i>
                <span data-forks>
                    <i class="fa fa-spinner" aria-hidden="true"></i>
                </span>
            </span>
        </a>`, 'text/html')

			console.log(github_cards.body.firstChild);
			GithubCards.appendChild(github_cards.body.firstChild)

		})
	})
	.catch(err => console.error(err));
