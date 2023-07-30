<template>
  <label
    for="checkmark"
    class="checkmark-container inline-flex items-center gap-3 text-sm text-brand-dark-1"
  >
    <input id="checkmark" type="checkbox" class="checkmark-input hidden" />
    <div class="checkmark"></div>
    {{ text }}
  </label>
</template>

<script>
export default {
  name: "TheCheckbox",
  props: {
    text: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
.checkmark-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark-container {
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Create a custom checkbox */
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #c7c8d2;
}

/* When the checkbox is checked, add a blue background */
.checkmark-input:checked ~ .checkmark {
  background-color: #4e60ff;
  border-color: #4e60ff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkmark-input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkmark-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
