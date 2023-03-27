while read -r line
do
    message=$(echo "$line" | cut -d '(' -f1 | xargs)
    author_name=$(echo "$line" | cut -d '(' -f2 | cut -d '<' -f1 | xargs)
    author_email=$(echo "$line" | cut -d '<' -f2 | cut -d '>' -f1 | xargs)
    echo "$line" > .changelog &&
    git add .changelog &&
    git commit -m "$message" --author="$author_name <$author_email>"
done < changelog