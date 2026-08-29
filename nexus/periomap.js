// SULTANA PERIOMAP™ — ISOLATED DATA MATRIX CODE INFRASTRUCTURE
var perioTarget = document.getElementById('perio-target-rows');
if (perioTarget) {
    var tableHTML = '';
    for (var r = 1; r <= 10; r++) {
        tableHTML += '<tr class="perio-tr">' +
                        '<td class="perio-td" style="font-weight:bold; color:#94a3b8; background-color:rgba(15,23,42,0.5); text-align:center; font-family:monospace;">Tooth-' + r + '</td>';
        for (var c = 1; c <= 6; c++) {
            tableHTML += '<td class="perio-td"><input type="text" maxlength="1" oninput="validatePerio(this)" class="perio-input"></td>';
        }
        tableHTML += '</tr>';
    }
    perioTarget.innerHTML = tableHTML;
}

function validatePerio(input) {
    var val = parseInt(input.value);
    if (val >= 4) {
        input.style.backgroundColor = '#ef4444';
        input.style.color = '#ffffff';
    } else {
        input.style.backgroundColor = '#111827';
        input.style.color = '#ffffff';
    }
}
