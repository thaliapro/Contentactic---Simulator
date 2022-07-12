<?php

try{

    $data = json_decode(file_get_contents('php://input'), true);
    
    $nom = $data['name'];
    $societe = $data['society'];
    $email = $data['email'];
    $estimation = $data['estimation'];
    $work = $data['work'] ? 'Création' : 'Refonte';
    $page = $data['page'] . ' ' . 'page(s)';
    $seo = $data['seo'] ? 'Oui' : 'Non';
    $shop = $data['shop'] ? 'Oui' : 'Non';
    $shopClient = $data['shopClient'] ? 'Oui' : 'Non';
    $shopPageCat = $data['shopPageCat'] . ' ' . 'page(s)';
    $shopPageProd = $data['shopPageProd'] . ' ' . 'page(s)';
    $shopSeoCat = $data['shopSeoCat'] ? 'Oui' : 'Non';
    $shopSeoProd = $data['shopSeoProd'] ? 'Oui' : 'Non';
    $blog = $data['blog'] ? 'Oui' : 'Non';
    $graphic = $data['graphic'] ? 'Oui' : 'Non';
    $english = $data['langages']->english ? 'Oui' : 'Non';
    $spanish = $data['langages']->spanish ? 'Oui' : 'Non';
    $italian = $data['langages']->italian ? 'Oui' : 'Non';
    $deutsch = $data['langages']->deutsch ? 'Oui' : 'Non';
    $netherlands = $data['langages']->netherlands ? 'Oui' : 'Non';
    $portuguese = $data['langages']->portuguese ? 'Oui' : 'Non';
    

    /* E-MAIL */
    $to = 'hello@contentactic.com';
    $subject = "Votre Simulation sur Contentactic";

    $message = "
    
    Bonjour ${nom},<br/><br/>

    Merci d'avoir utilisé notre simulateur en ligne ! <br/>
    Nous espérons que vous avez trouvé l'outil pratique et facile d'utilisation. Si vous avez rencontré une quelconque difficulté, n'hésitez pas à nous écrire par retour de mail - notre équipe se fera un plaisir de vous conseiller.<br/><br/> 
    
    Sur la base des éléments renseignés, le coût prévisionnel de votre site internet s'élève entre : <br/><br/>
    
    ${estimation} euros HT<br/><br/>
    
    Vous désirez recevoir un devis personnalisé ou plus détaillé ? <br/>
    Contactez notre équipe en lui écrivant à l'adresse suivante : hello@contentactic/com ou par téléphone au 06 78 53 75 30. <br/>
    Nous sommes à votre disposition pour vous conseiller et vous accompagner ! <br/><br/>
    
    RECAPITULATIF DE VOTRE SIMULATION<br/><br/>
    
    <strong>Nom :</strong> ${nom}<br/>
    <strong>Société :</strong> ${societe}<br/>
    <strong>E-mail :</strong> ${email}<br/>
    <strong>Estimation :</strong> Entre ${estimation}<br/>

    <strong>1. Quel est votre projet : création ou refonte de site internet ? :</strong><br/> ${work}<br/><br/>
    <strong>2. Combien de pages comportera votre site internet ? :</strong><br/> ${page}<br/><br/>
    <strong>3. Souhaitez-vous faire réaliser une analyse du potentiel SEO de votre site et de votre secteur d’activité pour déployer une stratégie de référencement optimale sur votre site ? :</strong><br/> ${seo}<br/><br/>
    <strong>4. Souhaitez-vous ajouter une boutique en ligne avec module de paiement à votre site internet (fonctionnalité e-commerce) ? :</strong><br/> ${shop}<br/><br/>
    <strong>5. Souhaitez-vous opter pour une boutique en ligne avec espace client ? :</strong><br/> ${shopClient}<br/><br/>
    <strong>6. Combien de pages « Catégorie » souhaitez-vous voir figurer dans votre boutique en ligne ? :</strong><br/> ${shopPageCat}<br/><br/>
    <strong>7. Combien de fiches « Produit » souhaitez-vous créer dans votre boutique en ligne ? :</strong><br/> ${shopPageProd}<br/><br/>
    <strong>8. Souhaitez-vous inclure une prestation de rédaction et d’optimisation SEO des pages « Catégorie » dans la présente estimation ? :</strong><br/> ${shopSeoCat}<br/><br/>
    <strong>9. Souhaitez-vous inclure une prestation de rédaction et d’optimisation SEO des fiches « Produit » dans la présente estimation ? :</strong><br/> ${shopSeoProd}<br/><br/>
    <strong>10. Souhaitez-vous ajouter un blog sur votre site internet ? :</strong><br/> ${blog}<br/><br/>
    <strong>11. Avez-vous besoin d’une identité visuelle (logo, charte graphique) pour votre site ? :</strong><br/> ${graphic}<br/><br/>

    <strong><u>Langues supplémentaires :</u></strong><br/>
    <strong>Anglais :</strong> ${english}<br/>
    <strong>Espagnol :</strong> ${spanish}<br/>
    <strong>Allemand :</strong> ${italian}<br/>
    <strong>Italien :</strong> ${deutsch}<br/>
    <strong>Néerlandais :</strong> ${netherlands}<br/>
    <strong>Portugais :</strong> ${portuguese}<br/><br/>

    A bientôt !
    ";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= "From: <simulateur@contentactic.com>" . "\r\n";

    mail($to, $subject, $message, $headers);
    mail($email, $subject, $message, $headers);

    echo json_encode("Ok");

} catch(Exception $e){
    echo json_encode("Error");
}
    
