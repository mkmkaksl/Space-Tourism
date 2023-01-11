{ pkgs }: {
  deps = [
    pkgs.python38Full
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}