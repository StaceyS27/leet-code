// TODO: Work on understanding. topics: recursion and backtracking 



var generateParenthesis = (n) => dfs(n);

const dfs = (n, combos = [], open = 0, close = 0, path = []) => {
    const isBaseCase = (path.length === (n * 2));
    if (isBaseCase) {
        combos.push(path.join(''));
        return combos;
    }

    const isOpen = open < n;
    if (isOpen) backTrackOpen(n, combos, open, close, path);

    const isClose = close < open;
    if (isClose) backTrackClose(n, combos, open, close, path);

    return combos;
}

const backTrackOpen = (n, combos, open, close, path) => {
    path.push('(');
    dfs(n, combos, (open + 1), close, path);
    path.pop();
}

const backTrackClose = (n, combos, open, close, path) => {
    path.push(')');
    dfs(n, combos, open, (close + 1), path);
    path.pop();
}
