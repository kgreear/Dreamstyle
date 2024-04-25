document.getElementById('submitButton').addEventListener('click', function() {
    var brandCost = parseFloat(document.querySelector('input[name="brand"]:checked').value);
    var bodyColorCost = parseFloat(document.querySelector('input[name="bodyColor"]:checked').value);
    var tintCost = parseFloat(document.querySelector('input[name="tint"]:checked').value);
    var rimColorCost = parseFloat(document.querySelector('input[name="rimColor"]:checked').value);
    var spoilerCost = parseFloat(document.querySelector('input[name="spoiler"]:checked').value);
    var louverCost = parseFloat(document.querySelector('input[name="louver"]:checked').value);
    var stripeCost = parseFloat(document.querySelector('input[name="stripe"]:checked').value);
  
    var totalCost = brandCost + bodyColorCost + tintCost + rimColorCost + spoilerCost + louverCost + stripeCost;
  
    // Display total estimate in container
    document.getElementById('totalEstimate').textContent = totalCost.toFixed(2);
  });
  