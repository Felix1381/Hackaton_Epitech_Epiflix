<template>
  <div class="footer-grey pt-12 px-[5%] lg:px-11 border-t-8 border-grey">
    <p class="text-base my-4 px-8">
      Questions? Call <a href="tel:1-844-505-2993">1-844-505-2993</a>
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[13px]">
      <ul class="px-8">
        <li><a href="#!">FAQ</a></li>
        <li><a href="#!">Investor Relations</a></li>
        <li><a href="#!">Ways to Watch</a></li>
        <li><a href="#!">Corporate Information</a></li>
        <li><a href="#!">Only on Netflix</a></li>
      </ul>
      <ul class="px-8">
        <li><a href="#!">Help Center</a></li>
        <li><a href="#!">Jobs</a></li>
        <li><a href="#!">Terms of Use</a></li>
        <li><a href="#!">Contact Us</a></li>
      </ul>
      <ul class="px-8">
        <li><a href="#!">Account</a></li>
        <li><a href="#!">Redeem Gift Cards</a></li>
        <li><a href="#!">Privacy</a></li>
        <li><a href="https://fast.com">Speed Test</a></li>
      </ul>
      <ul class="px-8">
        <li><a href="#!">Media Center</a></li>
        <li><a href="#!">Buy Gift Cards</a></li>
        <li><a href="#!">Cookie Preferences</a></li>
        <li><a href="#!">Legal Notices</a></li>
      </ul>
    </div>
    <div class="mx-8 mt-6 mb-3">
      <select
        name="language"
        class="bg-black text-gray-400 border border-[#333] rounded-sm py-3 px-4"
      >
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
      </select>
    </div>
    <p class="py-2 px-8 text-tiny">
      Made by <a href="https://github.com/abrahamebij">Abraham</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
