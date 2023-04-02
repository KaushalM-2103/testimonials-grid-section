data.forEach((element, i) => {
  document.querySelector(".parent_grid").innerHTML += `
  <div class="child_grid ${data[i].id_name}">
  <div class="user_profile">
    <img
      src="${data[i].profile_image}"
      class="rounded-circle img-fluid "
      alt="${data[i].id_name}_profile"
    />
    <div class="user_detail">
      <h6> ${data[i].name}</h6>
      <p> ${data[i].status}</p>
    </div>
  </div>
  <h1>
  ${data[i].title}
  </h1>
  <p>
  ${data[i].discription}
  </p>
</div>
  `;
});
