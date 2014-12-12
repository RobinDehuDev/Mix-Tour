/**
 * Created by jdevin on 11/12/14.
 */
var Joueur = function () {
    this.id=0;
    this.nbpjoue=0;
    this.nbpgagne=0;
    this.ratio=0;

    this.init = function (idj, nbjouee, nbgagnee) {
        this.id = idj;
        this.nbpjoue = nbjouee;
        this.nbpgagne= nbgagnee;
        if((this.nbpjoue==0)&&(this.nbpgagne==0)){
            ratio=0;
        }else{
            this.ratio=this.nbpjoue/this.nbpgagne;
        }

    };
};
var matchmaking = function () {

    this.nbjoueurs;
    this.tabj=new Array(this.nbjoueurs);

    this.init_matchmaking=function(nbjoueur,tabj2){
        this.nbjoueurs=nbjoueur;
        for (var i = 0; i < this.nbjoueurs; i++) {
            this.tabj[i] = tabj2[i];
        }
    };

    this.cherche_adversaire=function(joueur){
        var adversaire=new Joueur();

        for(var i=0;i<this.nbjoueurs;i++){
                if(this.tabj[i].ratio==joueur.ratio) {
                    adversaire.id = this.tabj[i].id;
                    adversaire.nbpjoue = this.tabj[i].nbpjoue;
                    adversaire.nbpgagne = this.tabj[i].nbpgagne;
                    adversaire.ratio = this.tabj[i].ratio;
                    break;
                }else{
                    console.log("ratio du joueur"+joueur.ratio);
                    console.log("ratio de l'adversaire"+adversaire.ratio);
                    console.log("ratio du joueur actuel"+this.tabj[i].ratio);
                    console.log("différence 1:"+(Math.abs(joueur.ratio-adversaire.ratio)));
                    console.log("différence 2:"+(Math.abs(joueur.ratio-this.tabj[i].ratio)));
                    console.log("test diff :"+(0.75-0.66));
                    if(Math.abs(joueur.ratio-adversaire.ratio)>(Math.abs(joueur.ratio-this.tabj[i].ratio))) {
                        adversaire.id = this.tabj[i].id;
                        adversaire.nbpjoue = this.tabj[i].nbpjoue;
                        adversaire.nbpgagne = this.tabj[i].nbpgagne;
                        adversaire.ratio = this.tabj[i].ratio;
                    }
                }
            }

console.log(adversaire.id);
    return adversaire;
    };

};
