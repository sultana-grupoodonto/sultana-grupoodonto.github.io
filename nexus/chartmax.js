// SULTANA CHARTMAX™ — ISOLATED GRAPHICAL TILES CODE INFRASTRUCTURE
var gridTarget = document.getElementById('chartmax-grid-target');
if (gridTarget) {
    var blockHTML = '';
    for (var i = 1; i <= 32; i++) {
        blockHTML += '<div id="tooth-' + i + '" onclick="toggleTooth(' + i + ')" class="tooth-btn">' +
                        '<div class="tooth-num">' + i + '</div>' +
                        '<span class="tooth-icon">🦷</span>' +
                     '</div>';
    }
    gridTarget.innerHTML = blockHTML;
}

function toggleTooth(num) {
    var tooth = document.getElementById('tooth-' + num);
    if (!tooth) return;
    if (tooth.style.borderColor === 'rgb(212, 175, 55)' || tooth.getAttribute('data-active') === 'true') {
        tooth.style.borderColor = '#1e293b';
        tooth.style.backgroundColor = '#111827';
        tooth.setAttribute('data-active', 'false');
    } else {
        tooth.style.borderColor = '#d4af37';
        tooth.style.backgroundColor = '#1e1b4b';
        tooth.setAttribute('data-active', 'true');
    }
}
