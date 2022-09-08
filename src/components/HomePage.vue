<template>
  <div>
    <v-container fluid>
      <v-form>
        <v-file-input
          multiple
          show-size=""
          counter=""
          label="Clique aqui para inserir seus arquivos!"
          chips
          v-model="files"
          append-icon="mdi-send"
          @click:append="processSubtitles"
        >
        </v-file-input>
      </v-form>
      <div class="pills">
        <PillPill
          v-for="wd in groupedWords"
          :key="wd"
          :name="wd.name"
          :amount="wd.amount"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import PillPill from "./PillPill";
export default {
  components: { PillPill },
  data: function () {
    return {
      files: [],
      groupedWords: [] 
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map(f => f.path)
      ipcRenderer.send("process-subtitle", paths);
      ipcRenderer.on("process-subtitle", (event, resp) => {
        this.groupedWords = resp;
      });
    },
  },
};
</script> 

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>