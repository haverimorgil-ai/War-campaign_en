var currentAmount = 720;

function selectAmount(btn, amount) {
    document.querySelectorAll('.amount-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById('customAmount').value = '';
    currentAmount = amount;
}

document.getElementById('btn360').addEventListener('click', function() { selectAmount(this, 360); });
document.getElementById('btn720').addEventListener('click', function() { selectAmount(this, 720); });
document.getElementById('btn1000').addEventListener('click', function() { selectAmount(this, 1000); });

document.getElementById('customAmount').addEventListener('input', function() {
    document.querySelectorAll('.amount-btn').forEach(function(b) { b.classList.remove('active'); });
    currentAmount = parseInt(this.value) || 0;
});

document.getElementById('payBtn').addEventListener('click', function() {
    var custom = document.getElementById('customAmount').value;
    var amount = custom ? parseInt(custom) : currentAmount;
    if (!amount || amount < 1) { alert('Please choose a donation amount'); return; }
    window.location.href = 'https://get.haverim.org.il/p/payment?ft4eEwqnRc5A68v=&p=' + amount;
});

document.getElementById('storyBtn').addEventListener('click', function() {
    var storyContent = document.getElementById('storyContent');
    var icon = document.getElementById('storyIcon');
    if (storyContent.classList.contains('hidden')) {
        storyContent.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        storyContent.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
});
