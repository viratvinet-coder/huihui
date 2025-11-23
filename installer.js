export default {
  async fetch(request) {
    const url = "https://raw.githubusercontent.com/viratvinet-coder/pterolifeboy/refs/heads/main/ptero.sh";
    const res = await fetch(url);
    return new Response(await res.text(), {
      headers: { "Content-Type": "text/plain" }
    });
  }
};
