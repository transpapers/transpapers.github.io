{
  description = "A Nix-flake-based Node.js development environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { self, nixpkgs }:
    let
      overlays = [
        (final: prev: rec {
          nodejs = prev.nodejs-18_x;
          pnpm = prev.nodePackages.pnpm;
          yarn = (prev.yarn.override { inherit nodejs; });
        })
      ];
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit overlays system; };
      });
    in
    {
      devShells = forEachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodePackages.eslint node2nix nodejs pnpm yarn typescript
          ];
	  nativeBuildInputs = with pkgs; [ cypress ];

	  shellHook = ''
	  	export CYPRESS_INSTALL_BINARY=0;
		export CYPRESS_RUN_BINARY=${pkgs.cypress}/bin/Cypress;
		export NODE_OPTIONS=--openssl-legacy-provider;
	  '';
        };
      });
    };
}
