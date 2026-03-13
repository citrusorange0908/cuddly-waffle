// 【ここを入力していく！】人格データリスト
const identities = [
    {
        name: "握る者",
        sinner: "ファウスト",
        keywords: ["出血", "釘", "注視"]
    },
    {
        name: "奥歯事務所 フィクサー",
        sinner: "ウーティス",
        keywords: ["振動", "沈潜"]
    },
    {
        name: "南部シ協会 4課",
        sinner: "ドンキホーテ",
        keywords: ["呼吸"]
    }
];

const listContainer = document.getElementById('identityList');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentKeyword = 'all';

// 画面を表示する関数
function displayIdentities() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // フィルタリング処理
    const filtered = identities.filter(idnty => {
        const matchesSearch = idnty.name.includes(searchTerm) || idnty.sinner.includes(searchTerm);
        const matchesKeyword = currentKeyword === 'all' || idnty.keywords.includes(currentKeyword);
        return matchesSearch && matchesKeyword;
    });

    // HTMLを生成して挿入
    listContainer.innerHTML = filtered.map(idnty => `
        <div class="card">
            <div class="sinner-name">${idnty.sinner}</div>
            <div class="identity-name">${idnty.name}</div>
            <div class="tag-container">
                ${idnty.keywords.map(k => `<span class="tag">#${k}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// 検索入力時のイベント
searchInput.addEventListener('input', displayIdentities);

// フィルターボタンクリック時のイベント
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // ボタンの見た目切り替え
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // キーワード更新して再表示
        currentKeyword = btn.getAttribute('data-keyword');
        displayIdentities();
    });
});

// 最初に一度実行
displayIdentities();
