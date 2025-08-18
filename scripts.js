var cart=[]

function loadDetail(name) {
  const main = document.getElementById("main");
  main.className = "detail-view";
  main.innerHTML = `
    <div class="item-image">
      <img src="Dirt.png" alt="Item Image">
    </div>
    <div class="item-info">
      <div>${name}</div>
      <div>Item Price</div>
      <div>Item Information</div>
      <div class="quantity-controls">
        <button id="decrease">-</button>
        <span id="quantity">0</span>
        <button id="increase">+</button>
      </div>
      <a href="#">I think this item's price is too high!</a>
      <a onclick="loadGrid()">⬅ Back to Store</a>
    </div>
  `;
}

function loadGrid() {
  const main = document.getElementById("main");
  main.className = "grid-view";
  main.innerHTML = `
    <div class="item-grid">
      <div class="item-card" onclick="loadDetail('Dirt')">
        <img src="Dirt.png" alt="Item Image">
        <p>Dirt<br>1C for 48 (0.02C each)</p>
        <div class="button-row">
          <button>+</button>
          <span style="color:white;">0</span>
          <button>-</button>
        </div>
      </div>
      <div class="item-card">
        <img src="Dirt.png" alt="Item Image">
        <p>Dirt<br>1C for 48 (0.02C each)</p>
        <button id="longButton">Add 48 to cart</button>
      </div>
    </div>
  `;
}
class ItemPair {
  constructor(item = null, amount = 0) {
    this.item = item;
    this.amount = amount;
  }
}

class Item {
    name="";
    price="";
    numPrice=1;
    amount=1;
    perPrice=1.1;

}