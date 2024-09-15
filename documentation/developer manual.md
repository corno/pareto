this manual is for developers who want to make changes to Pareto

these packages need to be upgraded if one of the core packages is updated:

glo-pareto-common
lib-pareto-filesystem
lib-pareto-test
res-pareto-arithmetic
res-pareto-array
res-pareto-boolean
res-pareto-build
res-pareto-collation
res-pareto-diff
res-pareto-filesystem
res-pareto-foreach
res-pareto-main

getting all repos

non archived
curl --request GET --url "https://api.github.com/search/repositories?q=user:corno+archived:false&per_page=100"        --header "Authorization: Bearer <github PAT>" | jq -r '.items[] | "\(.archived)\t\(.private)\t\(.visibility)\t: \(.name)"'


archived
curl --request GET --url "https://api.github.com/search/repositories?q=user:corno+archived:true&per_page=100"        --header "Authorization: Bearer <github PAT>" | jq -r '.items[] | "\(.archived)\t\(.private)\t\(.visibility)\t: \(.name)"'





