//TODO: Make command help
exports.help = (command) => {
    command = command.toLowerCase();
    switch (command){
        case roll:
            return `\`\`Format ${PREFIX}roll \[dice notation\]
            
            Summary: Roll is a dice simulator command that automatically handles any involved mathematics.
            \`\``;
    }
}