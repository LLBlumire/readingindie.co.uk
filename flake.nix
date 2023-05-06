{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils/main";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    let
      devSystems = with flake-utils.lib.system; [
        x86_64-linux
        x86_64-darwin
        aarch64-linux
        aarch64-darwin
      ];
      makeSystemFlake = system:
        let 
            pkgs = import nixpkgs { inherit system; };
        in
        {
          devShells = {
            default = pkgs.mkShell {
                buildInputs = with pkgs; [
                    yarn
                    pscale
                    just
                ];
            };
          };
          packages = {};
        };
      flake = flake-utils.lib.eachSystem devSystems makeSystemFlake;
    in
    flake;
}