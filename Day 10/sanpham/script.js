document.addEventListener("DOMContentLoaded", () => {
  fetch("product.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Không thể tải file products.json");
      }
      return response.json();
    })
    .then(data => {
      // Gọi hàm hiển thị cho từng danh mục
      renderCategory("phongKhach", data.phongKhach);
      renderCategory("phongBep", data.phongBep);
      renderCategory("phongNgu", data.phongNgu);
    })
    .catch(error => console.error("Lỗi tải dữ liệu:", error));
});

function renderCategory(id, items) {
  const container = document.querySelector(`#${id} .products`);
  if (!container) {
    console.warn(`Không tìm thấy phần tử có id: ${id}`);
    return;
  }

  container.innerHTML = ""; // Xóa nội dung cũ (nếu có)

  items.forEach(item => {
    const html = `
      <div class="product">
        <img src="images/${item.hinh}" alt="${item.ten}" />
        <h4>${item.ten}</h4>
        <p class="old-price">${item.giaGoc}</p>
        <p class="price">${item.gia}</p>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
}
