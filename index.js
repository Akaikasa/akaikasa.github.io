
fetch("https://api.github.com/orgs/akaikasa/repos")
    .then(response => response.json())
    .then(repolist => {
        
        projectsDiv = document.querySelector("#projects-ul");

        repolist.forEach(repo => {
            console.log(repo.name, repo);

            repo_li = document.createElement('li');
            
            repo_name_h3 = document.createElement('h3');
            repo_name_h3.textContent = repo.name;
            repo_li.appendChild(repo_name_h3);

            if (repo.description != null) {
                repo_desc_p = document.createElement('p');
                repo_desc_p.textContent = repo.description;
                repo_li.appendChild(repo_desc_p);
            }

            if (repo.license != null) {
                repo_license_badge = document.createElement('span');
                repo_license_badge.classList.add('badge');
                
                repo_license_badge_icon = document.createElement('span');
                repo_license_badge_icon.classList.add('material-symbols-outlined');
                repo_license_badge_icon.classList.add('icon');
                repo_license_badge_icon.textContent = "balance";
                repo_license_badge.appendChild(repo_license_badge_icon);
                
                repo_license_badge_text = document.createElement('span');
                repo_license_badge_text.textContent = repo.license.name;
                repo_license_badge.appendChild(repo_license_badge_text);

                repo_license_badge.onclick = () => {
                    alert(1);
                }
                repo_li.appendChild(repo_license_badge);
            }
                
            repo_github_a = document.createElement('a');
            repo_github_a.textContent = "Github";
            repo_github_a.href = repo.html_url;
            repo_li.appendChild(repo_github_a);

            projectsDiv.appendChild(repo_li);
        });
    })