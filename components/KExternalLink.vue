<template>
  <a
    class="k-external-link link"
    rel="noopener"
    target="_blank"
    :href="href"
  >
    <template v-if="this.$slots.default && this.$slots.default[0] && this.$slots.default[0].text">
      <slot/>
    </template>
    <template v-else>
      {{ label }}
    </template>
    <ExternalIcon class="k-external-link__icon"/>
  </a>
</template>

<style scoped lang="scss">
  .k-external-link {
    padding-right: 5px;
    overflow-wrap: break-word;
  }

  .k-external-link__icon {
    margin-left: 5px;

    width: 15px;
    position: relative;
    top: 2px;
  }
</style>

<script>
  import ExternalIcon from "kiste/icons/external.svg";

  export default {
    name: "KExternalLink",
    components: { ExternalIcon },
    props: {
      href: {
        type: String,
        required: true
      },
      showProtocol: {
        type: Boolean,
        default: false
      },
      showQuery: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      label() {
        const url = new (process.server ? require("url").URL : window.URL)(this.href);
        let label = "";

        if (this.showProtocol) {
          label += url.protocol;
          label += "//";
        }

        label += url.host + url.pathname;

        if (this.showQuery) {
          label += url.search;
        }

        return label;
      }
    }
  };
</script>
